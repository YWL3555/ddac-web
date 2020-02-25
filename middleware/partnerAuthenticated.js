export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login/hotel-partner')
    }

    if (store.state.auth.role !== "Partner"){
        return redirect('/login/hotel-partner')
    }
  }