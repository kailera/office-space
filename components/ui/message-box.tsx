import { Contact } from "./contact-avatar-list";

interface IMessageBox {
  user: Contact;
  onClose: () => void;
}

export default function MessageBox({ user, onClose }: IMessageBox) {
  return (
    <div className="ml-8 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 flex flex-col transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">{user.name}</span>
        <button onClick={onClose} className="text-red-500">✖</button>
      </div>
      <textarea
        className="resize-none border rounded-md p-2 h-24 dark:bg-gray-700"
        placeholder="Digite uma mensagem..."
      />
      <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
        Enviar
      </button>
    </div>
  );
}
