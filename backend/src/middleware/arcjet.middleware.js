import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
         const decision = await aj.protect({
            method: req.method,
            url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
            headers: req.headers,
            body: req.body,
        });
         if(decision.isDenied()){
            if(decision.reason.isRateLimit()){ 
                return res.status(429).json({ message: "Too many requests. Please try again later." });
            }
            else if(decision.reason.isBot()){
                return res.status(403).json({ message: "Access denied for bots." });
            }
           else {
            return res.status(403).json({ message: "Access denied." });
           }
         }

         if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({error: "Spoofed bot detected",message: "Malicious bot activity detected.",});
        }
        next();
    } catch (error) {
    console.log("Arcjet Protection Error:", error);
    next();
 }
}