export const dynamic = "force-static";

export default function InfoPage() {
  const group = {
    name: "International freaks DRAMA GROUP",
    owner: "Unknown",
    groupId: "120363295930899471@g.us",
    members: 35,
    link: "https://chat.whatsapp.com/E5O0PUfDrs7I5OOJH3LQuL",
    channel: "https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v",
    numbers: ["254769279076", "254799073744", "+256772340655", "+27688912008"],
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h1 className="text-3xl font-bold mb-2">{group.name}</h1>
      <p className="text-gray-600 mb-6">Public group and channel information</p>

      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div className="p-4 rounded-xl border">
          <div className="font-semibold mb-1">👑 Owner</div>
          <div>{group.owner}</div>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="font-semibold mb-1">🆔 Group ID</div>
          <div className="break-all">{group.groupId}</div>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="font-semibold mb-1">👥 Members</div>
          <div>{group.members}</div>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="font-semibold mb-1">🌍 Group Invite</div>
          <a href={group.link} className="text-blue-600 underline break-all">{group.link}</a>
        </div>
        <div className="p-4 rounded-xl border sm:col-span-2">
          <div className="font-semibold mb-1">🔗 Channel</div>
          <a href={group.channel} className="text-blue-600 underline break-all">{group.channel}</a>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">📞 Important Numbers</h2>
      <ul className="list-disc pl-6 space-y-1">
        {group.numbers.map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </div>
  );
}
