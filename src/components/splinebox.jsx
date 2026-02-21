import Spline from '@splinetool/react-spline';

function SplineBox() {
  return (
    <div className="mt-16 flex justify-center">
      <div className="w-[900px] h-[500px] rounded-2xl overflow-hiddesn border border-purple-700 shadow-2xl backdrop-blur-xl bg-[#111827]/60 animate-float">

        <Spline scene="https://prod.spline.design/Sbv7GDWz-e9rRDSa/scene.splinecode" />

      </div>
    </div>
  );
}

export default SplineBox;