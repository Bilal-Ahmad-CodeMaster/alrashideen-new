const BASE_URL = "https://alrashidin.fly.dev";

export const CONFIG = {
  inquiries: BASE_URL + "/api/inquiries/create",
  themeConfig: BASE_URL + "/api/company/getcompany",
  fleetData: BASE_URL + "/api/fleets/all",
  banners: BASE_URL + "/api/banners/all",
  careerData: BASE_URL + "/api/jobs/all",
  getAllProjects: BASE_URL + "/api/project/all",
  getAllServices: BASE_URL + "/api/services/all",
  getServiceById: BASE_URL + "/api/services",
  getAllRelatedServices: BASE_URL + "/api/services/related",

  coreService: BASE_URL + "/api/coreservices/list",

  recentProjects: BASE_URL + "/api/recentprojects/list",
  getAllVideos: BASE_URL + "/api/videoUrl/list",
};
