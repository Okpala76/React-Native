import apiclient from './client';

function send(message, listingId) {
  return apiclient.apiClient2.post('/messages', {
    message,
    listingId,
  });
}

export default {
  send,
}
