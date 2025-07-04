import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="flex-1" variant="outline" onClick={() => console.log("Google Sign In")}>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size="lg" className="flex-1" variant="outline" onClick={() => console.log("Google Sign In")}>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
}
