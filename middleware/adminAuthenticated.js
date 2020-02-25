export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login/admin')
    }

    if (store.state.auth.role !== "Admin"){
        return redirect('/login/admin')
    }
  }