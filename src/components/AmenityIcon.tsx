export function AmenityIcon({ name }: { name: string }) {
  const value = name.toLowerCase();
  const path = /pool|water/.test(value) ? "M3 17q3-3 6 0t6 0t6 0M3 21q3-3 6 0t6 0t6 0M7 14V5a2 2 0 0 1 4 0M15 14V5a2 2 0 0 1 4 0M7 8h8M7 12h8"
    : /gym|fitness/.test(value) ? "M3 8v8M6 5v14M6 12h12M18 5v14M21 8v8"
    : /work|office/.test(value) ? "M4 4h16v12H4zM8 21h8M12 16v5"
    : /park|garden|green/.test(value) ? "M12 2 5 12h4l-5 6h16l-5-6h4zM12 18v4"
    : /approved|security/.test(value) ? "M12 2 3 6v6c0 6 9 10 9 10s9-4 9-10V6zM7 12l3 3 7-7"
    : /hall|theatre|club/.test(value) ? "M3 21V9l9-6 9 6v12M3 9h18M7 12v6M12 12v6M17 12v6M1 21h22"
    : /skat|sport|play/.test(value) ? "M4 4v11h13l4 3H4zM7 21h1M17 21h1M8 5v5h6"
    : "M12 3l9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9";
  return <svg className="amenity-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>;
}
