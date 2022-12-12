export default function FormCard({ children }: any) {
  return (
    <div id="form-card" className="card">
      <div className="card-title">Calculator</div>
      {children}
    </div>
  );
}
