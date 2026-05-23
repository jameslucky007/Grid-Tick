// app/page.js

import {
  Check,
  Activity,
  Clock3,
  BarChart3,
  Calendar,
  PieChart,
  Settings,
  BookOpen,
  Dumbbell,
  GlassWater,
  Flower2,
  Menu,
  Home,
  User,
  Plus,
} from "lucide-react";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

const days = ["M", "T", "W", "T", "F", "S", "S"];

const grid = [
  [1, 0.7, 0.4, 1, 0.1, 0.1, 0.1],
  [1, 0.4, 0.2, 0.2, 0.7, 0.1, 0.1],
  [1, 0.7, 1, 0.7, 0.3, 0.1, 0.1],
  [1, 1, 0.4, 0.2, 0.2, 0.1, 0.1],
  [1, 0.3, 0.3, 0.2, 0.2, 0.1, 0.1],
  [1, 0.7, 0.3, 0.2, 0.2, 0.1, 0.1],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* HERO */}
            <div className="bg-[#f5f5f5] rounded-[36px] p-12 text-black">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* TEXT */}
                <div>
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>

                    <span className="text-2xl font-medium">
                      Habit Tracker
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl leading-[0.95] font-bold tracking-[-2px]">
                    Build habits.
                    <br />
                    Change your life.
                  </h1>

                  <p className="mt-10 text-xl md:text-3xl leading-[1.5] text-black/80 max-w-xl">
                    Track your habits, manage your time and stay consistent
                    every day.
                  </p>
                </div>

                {/* GRID */}
                <div className="pt-10">
                  <div className="flex justify-end gap-5 mb-6">
                    {days.map((day, index) => (
                      <span
                        key={index}
                        className="text-sm md:text-lg font-medium w-8 text-center"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-5">
                    {months.map((month, row) => (
                      <div
                        key={month}
                        className="flex items-center gap-6"
                      >
                        <span className="w-12 text-sm md:text-lg font-medium">
                          {month}
                        </span>

                        <div className="flex gap-4">
                          {grid[row].map((item, col) => (
                            <div
                              key={col}
                              className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-black"
                              style={{
                                opacity: item,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
              {/* FEATURES */}
              <div className="border border-white/10 rounded-[36px] p-8 bg-black">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  <FeatureCard
                    icon={<Activity size={42} />}
                    title="Habits"
                  />

                  <FeatureCard
                    icon={<Clock3 size={42} />}
                    title="Time"
                  />

                  <FeatureCard
                    icon={<BarChart3 size={42} />}
                    title="Progress"
                  />

                  <FeatureCard
                    icon={<Calendar size={42} />}
                    title="Schedule"
                  />

                  <FeatureCard
                    icon={<PieChart size={42} />}
                    title="Analytics"
                  />

                  <FeatureCard
                    icon={<Settings size={42} />}
                    title="Settings"
                  />
                </div>
              </div>

              {/* STORE */}
              <div className="bg-[#f5f5f5] rounded-[36px] p-10 text-black flex flex-col justify-between">
                <StoreButton
                  icon=""
                  title="Download on the"
                  subtitle="App Store"
                />

                <div className="h-[1px] bg-black/10 my-8" />

                <StoreButton
                  icon="▶"
                  title="GET IT ON"
                  subtitle="Google Play"
                />
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex justify-center xl:justify-end">
            <div className="w-[390px] h-[820px] rounded-[60px] border-[10px] border-[#2a2a2a] bg-[#f6f6f6] overflow-hidden relative shadow-2xl">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[130px] h-[34px] bg-black rounded-full z-20" />

              {/* STATUS */}
              <div className="px-7 pt-6 flex justify-between text-black text-sm font-medium">
                <span>9:41</span>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 border border-black rounded-sm" />
                </div>
              </div>

              <div className="px-7 pt-10 pb-6 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[22px] font-semibold text-black">
                    Today
                  </h2>

                  <Menu className="text-black w-6 h-6" />
                </div>

                {/* PROGRESS */}
                <div className="bg-white rounded-[28px] p-6 border border-black/5 mb-8">
                  <div className="flex items-center gap-6">
                    {/* CIRCLE */}
                    <div className="relative w-28 h-28">
                      <svg
                        className="w-28 h-28 -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#e5e5e5"
                          strokeWidth="10"
                          fill="none"
                        />

                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="black"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="314"
                          strokeDashoffset="69"
                        />
                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-black">
                        78%
                      </div>
                    </div>

                    <div>
                      <p className="text-lg font-medium text-black">
                        Daily Progress
                      </p>

                      <p className="text-2xl font-semibold text-black mt-2">
                        Great job!
                      </p>

                      <p className="text-black/70 text-lg mt-1">
                        Keep it up.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HABITS */}
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-2xl mb-5">
                     Habits
                  </h3>

                  <div className="space-y-4">
                    <HabitItem
                      icon={<Dumbbell />}
                      title="Workout"
                    />

                    <HabitItem
                      icon={<BookOpen />}
                      title="Read Book"
                    />

                    <HabitItem
                      icon={<GlassWater />}
                      title="Drink Water"
                    />

                    <HabitItem
                      icon={<Flower2 />}
                      title="Meditate"
                    />
                  </div>
                </div>

                {/* NAVBAR */}
                <div className="mt-6 bg-white rounded-[28px] border border-black/5 px-8 py-5 flex items-center justify-between">
                  <Home className="text-black w-6 h-6" />

                  <BarChart3 className="text-black/60 w-6 h-6" />

                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center -mt-10">
                    <Plus className="text-white w-8 h-8" />
                  </div>

                  <Calendar className="text-black/60 w-6 h-6" />

                  <User className="text-black/60 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="border border-white/10 rounded-[26px] aspect-square flex flex-col items-center justify-center gap-6">
      <div className="text-white">{icon}</div>

      <p className="text-xl md:text-2xl font-medium">{title}</p>
    </div>
  );
}

function StoreButton({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl">
          {icon}
        </div>

        <div>
          <p className="text-sm md:text-lg text-black/70">
            {title}
          </p>

          <p className="text-2xl md:text-4xl font-semibold leading-none mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <span className="text-3xl">→</span>
    </div>
  );
}

function HabitItem({ icon, title }) {
  return (
    <div className="bg-white rounded-[22px] border border-black/5 px-5 py-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="text-black">{icon}</div>

        <span className="text-black text-lg font-medium">
          {title}
        </span>
      </div>

      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <Check className="text-white w-5 h-5" />
      </div>
    </div>
  );
}