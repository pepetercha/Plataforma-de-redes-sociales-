import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center">
      {/* Avatar */}
      <Avatar className="h-20 w-20 border">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback className="bg-primary text-white">
          V
        </AvatarFallback>
      </Avatar>

      {/* Nombre y usuario */}
      <div className="text-center md:text-left mt-4">
        <h1 className="font-bold text-xl">VALDOCER</h1>
        <p className="text-muted-foreground">@valdocer</p>
      </div>

      {/* Redes sociales - enlaces genéricos */}
      <div className="flex gap-4 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="https://www.mercadolibre.com.mx" target="_blank" rel="noopener noreferrer">
          <img src="/icons/mercadolibre.svg" alt="Mercado Libre" className="h-6 w-6" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/x.svg" alt="X" className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
