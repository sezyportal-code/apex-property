import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Heart, 
  Calendar, 
  Bell, 
  Settings, 
  LogOut,
  Home,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MessageSquare,
  Clock
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { properties } from "@/data/properties";
import { cn } from "@/lib/utils";

const portfolioStats = [
  { 
    label: "Portfolio Value", 
    value: "$4.2M", 
    change: "+12.5%", 
    trend: "up",
    icon: DollarSign 
  },
  { 
    label: "Saved Properties", 
    value: "24", 
    change: "+3",
    trend: "up",
    icon: Heart 
  },
  { 
    label: "Scheduled Viewings", 
    value: "5", 
    change: "This week",
    trend: "neutral",
    icon: Calendar 
  },
  { 
    label: "Messages", 
    value: "12", 
    change: "3 unread",
    trend: "neutral",
    icon: MessageSquare 
  },
];

const recentActivity = [
  { action: "Viewed", property: "Oceanfront Villa", time: "2 hours ago", type: "view" },
  { action: "Saved", property: "Penthouse at One57", time: "5 hours ago", type: "save" },
  { action: "Inquiry sent", property: "Modern Mansion", time: "1 day ago", type: "inquiry" },
  { action: "Viewing scheduled", property: "Lakeside Estate", time: "2 days ago", type: "schedule" },
];

const investmentData = [
  { month: "Jan", value: 3.2 },
  { month: "Feb", value: 3.4 },
  { month: "Mar", value: 3.3 },
  { month: "Apr", value: 3.6 },
  { month: "May", value: 3.8 },
  { month: "Jun", value: 4.2 },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const savedProperties = properties.slice(0, 4);
  const maxValue = Math.max(...investmentData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-6 hidden lg:flex flex-col">
        <Link to="/" className="mb-12">
          <span className="text-2xl font-light tracking-tight">
            LUXE<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="flex-1 space-y-1">
          {[
            { id: "overview", icon: Home, label: "Overview" },
            { id: "portfolio", icon: BarChart3, label: "Portfolio" },
            { id: "saved", icon: Heart, label: "Saved" },
            { id: "viewings", icon: Calendar, label: "Viewings" },
            { id: "notifications", icon: Bell, label: "Notifications" },
            { id: "settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors",
                activeTab === item.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-border pt-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut size={16} className="mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-10">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-8">
          <Link to="/">
            <span className="text-2xl font-light tracking-tight">
              LUXE<span className="text-accent">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-light mb-2">Welcome back, {user?.name?.split(" ")[0]}</h1>
          <p className="text-muted-foreground">Here's what's happening with your portfolio.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card bg-card p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <stat.icon size={20} className="text-accent" />
                </div>
                {stat.trend === "up" && (
                  <span className="flex items-center text-green-500 text-sm">
                    <ArrowUpRight size={16} />
                    {stat.change}
                  </span>
                )}
                {stat.trend === "down" && (
                  <span className="flex items-center text-red-500 text-sm">
                    <ArrowDownRight size={16} />
                    {stat.change}
                  </span>
                )}
                {stat.trend === "neutral" && (
                  <span className="text-muted-foreground text-sm">{stat.change}</span>
                )}
              </div>
              <div className="text-2xl font-light mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 luxury-card bg-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Portfolio Performance</h2>
              <select className="bg-secondary px-3 py-1.5 rounded-lg text-sm border-0">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-4 px-4">
              {investmentData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 100}%` }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full bg-accent/20 rounded-t-lg relative overflow-hidden"
                  >
                    <div 
                      className="absolute bottom-0 w-full bg-accent rounded-t-lg"
                      style={{ height: "100%" }}
                    />
                  </motion.div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-2xl font-light">${investmentData[investmentData.length - 1].value}M</span>
              <span className="text-green-500 text-sm ml-2">+31.25% overall</span>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="luxury-card bg-card p-6"
          >
            <h2 className="text-lg font-medium mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    activity.type === "view" && "bg-blue-500/10 text-blue-500",
                    activity.type === "save" && "bg-red-500/10 text-red-500",
                    activity.type === "inquiry" && "bg-green-500/10 text-green-500",
                    activity.type === "schedule" && "bg-purple-500/10 text-purple-500"
                  )}>
                    {activity.type === "view" && <Eye size={14} />}
                    {activity.type === "save" && <Heart size={14} />}
                    {activity.type === "inquiry" && <MessageSquare size={14} />}
                    {activity.type === "schedule" && <Calendar size={14} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.property}</span>
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={12} />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4" size="sm">
              View All Activity
            </Button>
          </motion.div>
        </div>

        {/* Saved Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium">Saved Properties</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/saved">View All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedProperties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="luxury-card bg-card overflow-hidden group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-medium">{property.priceFormatted}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium truncate group-hover:text-accent transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">{property.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
