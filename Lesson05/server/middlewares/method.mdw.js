const logRequestMethod = (req, res, next) => {
   
      const method = req.method;
      console.log(`Request Method: ${method}`);

        next();
  }
    
module.exports = logRequestMethod;