const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // Choose any available port number

app.use(cors())
// Static array of objects (replace with your actual data)
const dataArray = [
    { id: 1, emissionType: 'Company Owned vehicles usage (Mobile combustion)',facilty:'Facility1',reportingYear:'2022-2023',month:'January',fuel:'petrol',quantity:14478,units:'Litres',emission:876,typeofvehicle:'Forklift'},
    { id: 2, emissionType: 'Company Owned vehicles usage (Mobile combustion)',facilty:'Facility2',reportingYear:'2022-2023',month:'February',fuel:'diesel',quantity:463,units:'Litres',emission:853,typeofvehicle:'Forklift'},
    { id: 3, emissionType: 'Company Owned vehicles usage (Mobile combustion)',facilty:'Facility3',reportingYear:'2022-2023',month:'March',fuel:'petrol',quantity:19767,units:'Litres',emission:254,typeofvehicle:'Truck'},
    { id: 4, emissionType: 'Company Owned vehicles usage (Mobile combustion)',facilty:'Facility4',reportingYear:'2022-2023',month:'January',fuel:'diesel',quantity:80,units:'Litres',emission:233,typeofvehicle:'Car'},
    { id: 5, emissionType: 'Company Owned vehicles usage (Mobile combustion)',facilty:'Facility5',reportingYear:'2022-2023',month:'January',fuel:'diesel',quantity:177,units:'Litres',emission:55,typeofvehicle:'Forklift'}
];

// Endpoint to get the array of objects
app.get('/api/data', (req, res) => {
    res.json(dataArray);
});

// Example of another route
app.get('/api/item/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = dataArray.find(item => item.id === itemId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
