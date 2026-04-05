// Image manifest - preloads all images to fix dynamic require issues
// This solves webpack bundling problems with dynamic template literal requires

// Profile and contact images
import preet from "./images/preet.png";
import contactMail from "./images/contactMail.png";

// Education logos
import shakti_logo from "./images/shakti_logo.png";
import pdeu_logo from "./images/pdeu_logo.png";

// Skill illustrations (PNG)
import ProgrammingImg from "./images/ProgrammingImg.png";
import CyberSecurityImg from "./images/CyberSecurityImg.png";

// Experience logos
import som_logo from "./images/som_logo.png";
import adorebits_logo from "./images/adorebits_logo.png";
import forensic_knight_logo from "./images/forensic_knight_logo.png";
import zidio_logo from "./images/zidio_logo.png";
import gyandeep_logo from "./images/gyandeep_logo.png";
import savgun_logo from "./images/savgun_logo.png";
import thakkarbapa_logo from "./images/thakkarbapa_logo.png";

// Certification logos
import hackingflix_logo from "./images/hackingflix_logo.png";
import oracle_logo from "./images/oracle_logo.png";
import tdo_logo from "./images/tdo_logo.png";
import deloitte_logo from "./images/deloitte_logo.png";
import mastercard_logo from "./images/mastercard_logo.png";
import aig_logo from "./images/aig_logo.png";
import canva_logo from "./images/canva_logo.png";
import powerbi_logo from "./images/powerbi_logo.png";
import growpartner_logo from "./images/growpartner_logo.png";
import isro_logo from "./images/isro_logo.png";
import dau_logo from "./images/dau_logo.png";
import walmart_logo from "./images/walmart_logo.png";

// Other logos
import coursera_logo from "./images/coursera_logo.png";
import deeplearning_ai_logo from "./images/deeplearning_ai_logo.png";
import google_logo from "./images/google_logo.png";
import ibm_logo from "./images/ibm_logo.png";
import microsoft_logo from "./images/microsoft_logo.png";
import stanford_logo from "./images/stanford_logo.png";
import nptel_logo from "./images/nptel_logo.png";
import gcp_logo from "./images/gcp_logo.png";
import github_logo from "./images/github_logo.png";
import dsc_logo from "./images/dsc_logo.png";
import intel_logo from "./images/intel_logo.jpg";
import legato_logo from "./images/legato_logo.png";
import delhivery_logo from "./images/delhivery_logo.png";
import iu_logo from "./images/iu_logo.png";
import freecopy_logo from "./images/freecopy_logo.png";
import muffito_logo from "./images/muffito_logo.png";
import mozilla_logo from "./images/mozilla_logo.png";
import codeInLogo from "./images/codeInLogo.png";
import saayaHealthLogo from "./images/saayaHealthLogo.png";
import nextuLogo from "./images/nextuLogo.jpg";
import pwa from "./images/pwa.png";
import googleAssistant from "./images/googleAssistant.jpg";
import masterportfolio_banner from "./images/masterportfolio-banner-light.png";
import portfolio from "./images/portfolio.gif";

// Export all images as a mapping object
const imageMap = {
  // Profile
  "preet.png": preet,
  "contactMail.png": contactMail,

  // Education
  "shakti_logo.png": shakti_logo,
  "pdeu_logo.png": pdeu_logo,

  // Skills (PNG)
  "ProgrammingImg.png": ProgrammingImg,
  "CyberSecurityImg.png": CyberSecurityImg,

  // Experience
  "som_logo.png": som_logo,
  "adorebits_logo.png": adorebits_logo,
  "forensic_knight_logo.png": forensic_knight_logo,
  "zidio_logo.png": zidio_logo,
  "gyandeep_logo.png": gyandeep_logo,
  "savgun_logo.png": savgun_logo,
  "thakkarbapa_logo.png": thakkarbapa_logo,

  // Certifications
  "hackingflix_logo.png": hackingflix_logo,
  "oracle_logo.png": oracle_logo,
  "tdo_logo.png": tdo_logo,
  "deloitte_logo.png": deloitte_logo,
  "mastercard_logo.png": mastercard_logo,
  "aig_logo.png": aig_logo,
  "canva_logo.png": canva_logo,
  "powerbi_logo.png": powerbi_logo,
  "growpartner_logo.png": growpartner_logo,
  "isro_logo.png": isro_logo,
  "dau_logo.png": dau_logo,
  "walmart_logo.png": walmart_logo,

  // Other logos
  "coursera_logo.png": coursera_logo,
  "deeplearning_ai_logo.png": deeplearning_ai_logo,
  "google_logo.png": google_logo,
  "ibm_logo.png": ibm_logo,
  "microsoft_logo.png": microsoft_logo,
  "stanford_logo.png": stanford_logo,
  "nptel_logo.png": nptel_logo,
  "gcp_logo.png": gcp_logo,
  "github_logo.png": github_logo,
  "dsc_logo.png": dsc_logo,
  "intel_logo.jpg": intel_logo,
  "legato_logo.png": legato_logo,
  "delhivery_logo.png": delhivery_logo,
  "iu_logo.png": iu_logo,
  "freecopy_logo.png": freecopy_logo,
  "muffito_logo.png": muffito_logo,
  "mozilla_logo.png": mozilla_logo,
  "codeInLogo.png": codeInLogo,
  "saayaHealthLogo.png": saayaHealthLogo,
  "nextuLogo.jpg": nextuLogo,
  "pwa.png": pwa,
  "googleAssistant.jpg": googleAssistant,
  "masterportfolio-banner-light.png": masterportfolio_banner,
  "portfolio.gif": portfolio,
};

// Helper function to get image by filename
export const getImage = (imageName) => {
  if (imageMap[imageName]) {
    return imageMap[imageName];
  }
  console.warn(`Image not found in imageMap: ${imageName}`);
  return null;
};

export default imageMap;
