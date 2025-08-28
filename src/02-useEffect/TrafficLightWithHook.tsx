import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  
  const {countdown, condicion, light, colors} = useTrafficLight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        
        <h1 className="text-white text-3xl font-thin">Semaforo</h1>
        <h2 className="text-white text-xl">Countdown: {countdown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="w-64 bg-blue-500 rounded-full transition-all duration-1000 ease-linear h-2"
            style={{width: `${(countdown / condicion) * 100}%`}}></div>
        </div>

        <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  );
};