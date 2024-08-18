const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const data = [
    { id: 1, title: "Branches", description: "Abstract Branches lets you manage, version, and document your designs in one place." },
    { id: 2, title: "Manage your account", description: "Configure your account settings, such as your email, profile details, and password." },
    { id: 3, title: "Manage organizations, teams, and projects", description: "Use Abstract organizations, teams, and projects to organize your people and your work." },
    { id: 4, title: "Manage billing", description: "Change subscriptions and payment details." },
    { id: 5, title: "Authenticate to Abstract", description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning." },
    { id: 6, title: "Abstract support", description: "Get in touch with a human." }
];

app.get('/api/data', (req, res) => {
    const { query } = req.query;

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query?.toLowerCase() || '')
    );

    res.json(filteredData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
