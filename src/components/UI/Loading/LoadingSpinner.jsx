export default function LoadingSpinner() {
    return (
        <div className="h-screen grid place-content-center gap-4">
            <div className="border-bg-nav  h-20 w-20 animate-spin rounded-full border-8 border-t-btn-orange" />
            <p className="font-bold tracking-wider">Cargando ...</p>
        </div>
    );
  }
  