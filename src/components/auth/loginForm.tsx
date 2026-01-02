import { useAuth } from "@/lib/context/useAuth";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "motion/react";

interface LoginFormProps {
  onSignUpClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [see, setSee] = useState(false);

  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            placeholder="admin@eastlux.com"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 bg-white border-gray-300 focus:border-brand-secondary-500 focus:ring-brand-secondary-500 transition-all"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              id="password"
              type={see ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12 pr-12 bg-white border-gray-300 focus:border-brand-secondary-500 focus:ring-brand-secondary-500 transition-all"
              disabled={isLoading}
            />
            <Button
              className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent text-gray-500 hover:text-brand-main-900"
              variant="ghost"
              type="button"
              onClick={() => setSee(!see)}
              tabIndex={-1}
            >
              {see ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeClosed className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-brand-secondary-600 hover:text-brand-secondary-700 font-medium transition-colors hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-brand-main-900 to-brand-secondary-600 hover:from-brand-main-800 hover:to-brand-secondary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </motion.div>
  );
};
