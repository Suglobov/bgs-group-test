export default function ({ store, error }) {
  // console.log('store', store);
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403,
    });
  }
}
