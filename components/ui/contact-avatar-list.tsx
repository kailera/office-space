import Image from "next/image";

export interface Contact {
  id: string;
  name: string;
  image: string;
}

interface IContactAvatarList {
  contacts: Contact[];
  onSelect: (user: Contact) => void;
}

export default function ContactAvatarList({
  contacts,
  onSelect,
}: IContactAvatarList) {
  return (
    <div
      className="ml-4 flex flex-col space-y-2 animate-slide-in-from-left"
    >
      {contacts.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user)}
          className="w-12 h-12 rounded-full border-2 border-gray-400 hover:scale-105 transition"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
        </button>
      ))}
    </div>
  );
}
