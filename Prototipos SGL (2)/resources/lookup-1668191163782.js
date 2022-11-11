(function(window, undefined) {
  var dictionary = {
    "642a3fd8-406e-4b98-af4d-18f40c0e40db": "3-Crear Perfil",
    "71e62591-668a-4ba4-b4e5-cce7fa8bc487": "7-Nueva Licencia",
    "8a7c624e-42b7-4251-9b2f-3fd6f2841f9c": "6-Generar Graficos",
    "63680e26-473f-44bd-af16-80ac324a5af3": "16-Visualizar Licencia",
    "a2aa95e4-e27e-4040-ac44-f8bfb526ba6f": "5-Eliminar Perfil",
    "2a2716ae-8fee-4ac3-bb58-17214fe2ba27": "Mensaje confirmacion Perfil",
    "4fb6b692-2951-469a-ba27-b084b47a25ec": "4-Modificar Perfil",
    "d0b31b85-8432-4301-b50c-666900630a27": "2-Menu ",
    "46c0d774-577d-4bb4-b1cb-f65687c1d523": "Mensaje licencia creada",
    "47996442-9512-4182-9cfc-d1749c25a54c": "8-Nueva Licencia Virtual",
    "abd3204c-1cfe-4b23-b208-94e79aba881a": "11-Buscar Licencias",
    "286f7ecb-4dd3-4834-94cb-78e63e7cf136": "Archivo PDF",
    "3fa732d3-7d8a-4624-bdc7-40c6539f4a29": "Mensaje Modificar perfil",
    "db65c207-c87e-413c-b407-c45e2fe1ab5b": "12-Notificar",
    "ed189394-b017-4d11-bfed-fef1de62976b": "14-Turno",
    "d9d84d38-880e-4887-8a82-b1bb8ae8b32f": "Mensaje eliminar perfil",
    "a6b58e98-0f2a-42fb-8d39-6692bd9a41db": "1-Inicio de Sesion",
    "4fad2626-d1d2-40e3-9e16-ad318ba59a3c": "15-Listado ",
    "5c65bc24-502a-4f96-88cc-688d502095e9": "10-Confirmar Licencia Virtual",
    "64bec843-da6c-49fc-a0ca-0d00d352ba3d": "Mensaje Licencia virtual",
    "8fd16d9c-657c-4e20-97e8-b54af87c47f0": "9-Licencias Pendientes",
    "e00eedef-1bcb-4318-aea8-f1728ebdee6f": "17-Cambiar estado ",
    "bc3c56e2-8ebf-4b53-85b3-fd50c0626fe7": "13-Notificaciones",
    "45a42dd6-6759-4825-91e1-a937050d7c8d": "Mensaje cambiar estado",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);