function initData() {
  jimData.variables["Por enfermedad"] = "Por enfermedad";
  jimData.datamasters["Licencias"] = [
    {
      "id": 1,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "1",
        "8054a154-4d01-4eaf-a570-385f42713665": "1235",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por estudio",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "Pendiente",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "08/09/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "11/09/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    },
    {
      "id": 2,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "2",
        "8054a154-4d01-4eaf-a570-385f42713665": "5468",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por vacaciones",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "En curso",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "12/08/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "11/08/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    },
    {
      "id": 3,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "3",
        "8054a154-4d01-4eaf-a570-385f42713665": "4856",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por enfermedad",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "Finalizada",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "11/08/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "11/08/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    },
    {
      "id": 4,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "4",
        "8054a154-4d01-4eaf-a570-385f42713665": "1458",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por estudio",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "Pendiente",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "05/03/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "07/03/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    },
    {
      "id": 5,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "5",
        "8054a154-4d01-4eaf-a570-385f42713665": "7458",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por enfermedad",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "En curso",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "10/04/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "11/08/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    },
    {
      "id": 6,
      "datamaster": "Licencias",
      "userdata": {
        "6e6c8101-282b-4c63-9c2e-776d5a536bc5": "6",
        "8054a154-4d01-4eaf-a570-385f42713665": "4785",
        "df6486c4-3319-43b3-8646-51f7f841bbe5": "Por vacaciones",
        "c7fb2b16-2ed7-4130-94f2-fa5ef3cdf6cf": "Finalizada",
        "52a7c5f0-dc4a-47ae-9a17-33f939b9086f": "11/08/2022",
        "46dad37c-bf93-465d-bdfd-8c09d45fd1fb": "11/08/2022",
        "f999f29a-4533-44ed-9b5e-387f91509d69": ""
      }
    }
  ];
  jimData.datamasters["Licencias"].category = {
    "046cd556-7d71-47e9-bb2c-cc7ae71c9a43": ["Pendiente","En curso","Finalizada"],
    "af78b138-9a00-408f-bed5-555b48c40698": ["Por enfermedad","Por estudio","Por vacaciones"]
  };

  jimData.isInitialized = true;
}