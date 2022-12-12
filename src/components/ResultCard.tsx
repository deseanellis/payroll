export default function ResultCard({ children }: any) {
  return (
    <div id="result-card" className="card">
      <div className="card-title">Result</div>
      {children}
    </div>
  );
}
