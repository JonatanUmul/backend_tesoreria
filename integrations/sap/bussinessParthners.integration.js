import { sapRequest } from "./sapClient.js";

export const getBusinessPartnerIntegration = async (socio_Negocio) => {
  return await sapRequest({
    method: "GET",
    endpoint: `/BusinessPartners('${socio_Negocio}')?$select=CardCode,AdditionalID,CardName,CardType,GroupCode,Address,MailAddress,Phone1,ContactPerson,Notes,EmailAddress`,
  });
};

