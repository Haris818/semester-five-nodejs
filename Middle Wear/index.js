const express = require('express');
const app = express();

//APPLIACTION LEVEL MIDDLE WAER 
//RUNS TO EVERY REQUEST SERVER

app.use((req, res, next)=>{
console.log('[Application-level] ${req.method}${req.path}');
next();
});


//THIRD PART MIDDLE WEAR
// Built-in middleware to parse JSON body in POST requests

app.use(express.json());

//CUSTOME LEVEL MIDDLE WEAR 
// Our own middleware function to log a message

function simpleLogger(req, res, next){
    console.log('[Custome Middleware] HELLO FROM CUSTOME MIDDLEWEAR!');
    next();
}

// Use custom middleware only on /hello route
app.get('/hello', simpleLogger,(req,res) =>{
    res.send('Hello from /hello route!');
});



// ROUTE LEVEL MIDLE WEAR 
function validateProductId(req,res,next) {
    const id = parseInt(req.params.id);
    if(isNaN(id) || id <= 0){
        return res.status(400).json({sucess: false, error: 'Invalid product ID'});
    }
    next();
}

// Route uses route-level middleware validateProductId

app.get('/product/:id', validateProductId, (req, res, next) => {
  const productId = parseInt(req.params.id);

  if (productId !== 1) {
    const err = new Error('Product not found');
    err.status = 404;
    return next(err);
  }

  res.json({ id: productId, name: 'Sample Product' });
});

// === 5. GROUP-LEVEL MIDDLEWARE ===
// Create router for admin routes
const adminRouter = express.Router();

// Middleware for admin routes only
adminRouter.use((req, res, next) => {
  console.log('[Group-level] Admin middleware executed');
  next();
});

adminRouter.get('/dashboard', (req, res) => {
  res.send('Welcome to Admin Dashboard');
});

adminRouter.get('/settings', (req, res) => {
  res.send('Welcome to Admin Settings');
});

// Use adminRouter on /admin path
app.use('/admin', adminRouter);

// === 6. ERROR-HANDLING MIDDLEWARE ===
// Must be the last middleware to catch errors
app.use((err, req, res, next) => {
  console.log('[Error Handler] Error caught:', err.message);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// === Default route for testing ===
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Start server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
}); 



