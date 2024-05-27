const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Dummy database data
const data = [
    { id: 1, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility1', reportingYear: '2022-2023', month: 'January', fuel: 'petrol', quantity: 14478, units: 'Litres', emission: 876, typeofvehicle: 'Forklift' },
    { id: 2, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility2', reportingYear: '2021-2022', month: 'February', fuel: 'diesel', quantity: 463, units: 'Litres', emission: 853, typeofvehicle: 'Forklift' },
    { id: 3, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility3', reportingYear: '2018-2019', month: 'March', fuel: 'petrol', quantity: 19767, units: 'Litres', emission: 254, typeofvehicle: 'Truck' },
    { id: 4, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility4', reportingYear: '2020-2021', month: 'January', fuel: 'diesel', quantity: 80, units: 'Litres', emission: 233, typeofvehicle: 'Car' },
    { id: 5, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility5', reportingYear: '2022-2023', month: 'March', fuel: 'diesel', quantity: 177, units: 'Litres', emission: 55, typeofvehicle: 'Forklift' },
    { id: 6, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility2', reportingYear: '2017-2018', month: 'April', fuel: 'petroleum', quantity: 677, units: 'Litres', emission: 507, typeofvehicle: 'Truck' },
    { id: 7, emissionType: 'Company Owned vehicles usage (Mobile combustion)', facilty: 'Facility1', reportingYear: '2022-2023', month: 'May', fuel: 'diesel', quantity: 1600, units: 'Litres', emission: 1000, typeofvehicle: 'Forklift' }
];
app.use(cors());
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
console.log(`your endpoint will be at :http://localhost:5000/api/data`);