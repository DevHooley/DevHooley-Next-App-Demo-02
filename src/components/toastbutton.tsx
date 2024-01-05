import { toast } from 'sonner';

export default function ToastButton() {
  return (
    <div className="p-2 flex items-center justify-center">
      <button
        onClick={() => toast.success('Success!')}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block px-3 py-2 bg-amber-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105  transition-transform duration-300 active:bg-amber-600 active:shadow-inner active:scale-100"
      >
        Notify me!
      </button>
    </div>
  );
}
