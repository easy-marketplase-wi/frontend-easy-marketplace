import { Input } from "../../atoms/input/input";

export const BasicInformationUser = () => {
  

  
  return (
    <div className="flex flex-col gap-4 h-full">
      <h2 className="mt-4">Informações básicas</h2>
      <Input
        label="Nome completo"
        type="text"
        name="name"
        placeholder="Digite seu nome"
      />
      <Input
        label="Celular (Whatsapp)"
        type="text"
        name="phone"
        placeholder="Digite seu número de celular"
      />
      <Input
        label="Email"
        type="email"
        name="phone"
        placeholder="Digite seu número de celular"
      />
    </div>
  );
};
