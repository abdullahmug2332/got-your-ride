const paypal = require('@paypal/checkout-server-sdk');

// Configure PayPal environment
const client = new paypal.core.PayPalHttpClient(new paypal.core.SandboxEnvironment(
    'AdnvurMN8vpRqvHPW28keaGrK7tq1eNLraBEe906cSEs91e9BpC8YFISnRvtkTayknij8ps9RhbGLm7X',    // Replace with your client ID
    'EB-vExTBKWzj7Xam9NQ9BbH7Nzbw56CNCXdNROzwcf4OqRzSHhgKr4yj5PuQTs75YaZOzNBoBeIq07LK'    // Replace with your client secret
));

module.exports = client;
