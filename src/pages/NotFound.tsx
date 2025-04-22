import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-law-cream">
      <div className="text-center p-8 max-w-md">
        <div className="text-9xl font-bold text-law-navy mb-4">404</div>
        <h1 className="text-3xl font-bold text-law-navy mb-4">Page Not Found</h1>
        <p className="text-gray-700 mb-8">
          We're sorry, the page you requested could not be found. Please check the URL or navigate back to our homepage.
        </p>
        <Button asChild className="bg-law-navy hover:bg-opacity-90 text-white px-6 py-3">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
