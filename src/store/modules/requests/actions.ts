import Request from '@/interfaces/Request';

export default {
  async contactCoach(context: any, payload: any) {
    const newRequest: Record<string, any> = {
      userEmail: payload.email,
      userMessage: payload.message
    };

    const response = await fetch(
      `https://vue-http-demo-b07fe-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to PUT!');
      throw error;
    }

    context.commit('addRequest', newRequest);
  },
  async loadRequests(context: any) {
    const coachId = context.rootGetters.getUserId;
    const token = context.rootGetters.getToken;
    const response = await fetch(
      `https://vue-http-demo-b07fe-default-rtdb.europe-west1.firebasedatabase.app/requests.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request: Request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        userMessage: responseData[key].userMessage
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
