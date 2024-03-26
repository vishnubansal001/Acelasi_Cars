import User from "../_models/user.model.js";

class UserService {
  async #getUserById(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async #getUserByEmail(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async loginUser({ email, password }) {
    const user = await this.#getUserByEmail(email);
    if (user.password !== password) {
      throw new Error("Invalid password");
    }
    return user;
  }

  async registerUser({ email, password, name, role }) {
    const user = await User.create({ email, password, role, name });
    return user;
  }

  async checkAdmin(id) {
    const user = await this.#getUserById(id);
    if (user.role !== "admin") {
      throw new Error("Unauthorized");
    }
    return user;
  }
}

export default UserService;