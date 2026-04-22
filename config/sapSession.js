let session = null;
let router = null;

export const setSession = (sessionId, routerId) => {
  session = sessionId;
  router = routerId;
};

export const getSession = () => ({
  session,
  router,
});

export const clearSession = () => {
  session = null;
  router = null;
};
