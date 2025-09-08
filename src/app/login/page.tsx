import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {

  return(
    <div>
      <h1>Página de login</h1>
      <form action="">
        <div>
          <Label htmlFor="email"> Email: </Label> 
          <Input id="email" />
        </div>
        <div>
          <Label htmlFor="senha"> Senha: </Label> 
          <Input id="senha" />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  ) 
}