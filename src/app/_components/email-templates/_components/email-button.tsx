import { Button } from "@react-email/components";

interface EmailButtonProps {
  href: string;
  children: string;
  
}
export default function EmailButton({ href, children } : Readonly<EmailButtonProps>) {
  return (
    <Button className="bg-black text-white py-2 px-10 rounded" href={href}>
      {children}
    </Button>
  )
}