import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';

const tripTypes = [
  'Spiritual',
  'Adventure',
  'Family',
  'Luxury',
  'Weekend',
  'Remote Work',
];

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const durations = ['1-3 days', '4-7 days', '8-14 days', '15+ days'];

export function FilterSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [budget, setBudget] = useState([10000, 50000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleMonth = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  if (isCollapsed) {
    return (
      <div className="fixed left-0 top-20 z-40 bg-white border-r border-slate-200 rounded-r-lg shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="h-12 w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <aside className="fixed left-0 top-20 z-40 w-72 h-[calc(100vh-5rem)] bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Collapse Button */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#0f172a]">Smart Filters</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(true)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Month Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#14b8a6]" />
            <label className="text-sm">Travel Month</label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {months.map((month) => (
              <Badge
                key={month}
                variant={selectedMonths.includes(month) ? "default" : "outline"}
                className={`cursor-pointer justify-center ${
                  selectedMonths.includes(month)
                    ? 'bg-[#14b8a6] hover:bg-[#14b8a6]/90'
                    : 'hover:bg-slate-100'
                }`}
                onClick={() => toggleMonth(month)}
              >
                {month}
              </Badge>
            ))}
          </div>
        </div>

        {/* Trip Duration */}
        <div className="space-y-3">
          <label className="text-sm">Trip Duration</label>
          <div className="space-y-2">
            {durations.map((duration) => (
              <div
                key={duration}
                className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#14b8a6]"
              >
                <input type="checkbox" className="rounded" />
                <span>{duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-[#f59e0b]" />
            <label className="text-sm">Budget Range</label>
          </div>
          <Slider
            value={budget}
            onValueChange={setBudget}
            min={5000}
            max={100000}
            step={5000}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-[#64748b]">
            <span>₹{budget[0].toLocaleString()}</span>
            <span>₹{budget[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Trip Type */}
        <div className="space-y-3">
          <label className="text-sm">Trip Type</label>
          <div className="flex flex-wrap gap-2">
            {tripTypes.map((type) => (
              <Badge
                key={type}
                variant={selectedTypes.includes(type) ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedTypes.includes(type)
                    ? 'bg-[#f59e0b] hover:bg-[#f59e0b]/90'
                    : 'hover:bg-slate-100'
                }`}
                onClick={() => toggleType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </div>
    </aside>
  );
}
