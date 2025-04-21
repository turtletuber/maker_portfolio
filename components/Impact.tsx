import Image from "next/image";

export default function Impact() {
  return (
    <section className="px-10 py-16 bg-gray-50 flex items-center gap-10">
      <Image 
        src="/images/headshot_mike.png"
        alt="Mike Amato wearing safety gear"
        className="rounded-2xl w-64 h-64 object-cover shadow-md"
        width={256}
        height={256}
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">How I Make an Impact</h2>
        <ul className="space-y-4 text-gray-700">
  <li>
    <span className="font-semibold">Classroom Tech Integration:</span> Helping schools integrate tech in ways that actually work for teachers and students. Not complicating it and ensuring compliance and practicality.
  </li>
  <li>
    <span className="font-semibold">Project &amp; Problem-Based Learning:</span> From electric motor kits for distance learning to school-wide STEM events, I design experiences where students do first, while understanding.
  </li>
  <li>
    <span className="font-semibold">Inclusion by Design:</span> Using Universal Design for Learning (UDL) to create classrooms where every student thrives, not just the &quot;STEM naturals.&quot;
  </li>
  <li>
    <span></span> Students call me Mr. Mike or Maker Mike!
  </li>
</ul>
        <div className="mt-6 flex gap-6 text-center">
          <div className="bg-white px-6 py-4 rounded-xl shadow-md">
            <p className="text-xl font-bold text-blue-600">7+ yrs</p>
            <p className="text-sm text-gray-500">Teaching</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-md">
            <p className="text-xl font-bold text-blue-600">4+ yrs</p>
            <p className="text-sm text-gray-500">Managing</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-md">
            <p className="text-xl font-bold text-blue-600">$25k+</p>
            <p className="text-sm text-gray-500">Awards &amp; Grants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
