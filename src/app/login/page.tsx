import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {

  return(
    <div>
      <h1 className="text-center p-2">Página de login</h1>
      <div className="flex justify-center items-center">
        <form action="" className="p-2 max-w-[350px] w-full">
          <div>
            <Label htmlFor="email"> Email: </Label> 
            <Input id="email" />
          </div>
          <div className="pt-2">
            <Label htmlFor="senha"> Senha: </Label> 
            <Input id="senha" />
          </div>
          <div className="pt-2">
            <Button
              className="bg-blue-500"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) 
}