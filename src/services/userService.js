import { auth } from '../config/firebase';

const userService = {
  async loginUser(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async signupUser(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};

export default userService;
