
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Sample events data
const events = [
  { date: new Date(2025, 4, 15), title: 'Teacher Meeting', type: 'meeting' },
  { date: new Date(2025, 4, 20), title: 'End of Term Exams', type: 'exam' },
  { date: new Date(2025, 4, 25), title: 'Parent-Teacher Conference', type: 'conference' },
  { date: new Date(2025, 4, 28), title: 'School Exhibition', type: 'event' },
];

const AdminCalendarManagement: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filter, setFilter] = useState('all');

  // Filter events based on selected filter
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);
  
  // Get events for the selected date
  const selectedDateEvents = filteredEvents.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );

  // Function to get dates with events for styling in the calendar
  const datesWithEvents = filteredEvents.map(event => event.date);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>School Calendar</CardTitle>
              <CardDescription>View and manage school events</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter Events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="meeting">Meetings</SelectItem>
                  <SelectItem value="exam">Exams</SelectItem>
                  <SelectItem value="conference">Conferences</SelectItem>
                  <SelectItem value="event">School Events</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Add Event</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  event: datesWithEvents
                }}
                modifiersStyles={{
                  event: {
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                  }
                }}
              />
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {date ? date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : 'No date selected'}
                  </CardTitle>
                  <CardDescription>
                    {selectedDateEvents.length} event{selectedDateEvents.length !== 1 ? 's' : ''} scheduled
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDateEvents.length === 0 ? (
                    <div className="text-center py-6 text-muted-foreground">
                      No events scheduled for this date
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedDateEvents.map((event, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <Badge variant={
                              event.type === 'meeting' ? 'default' :
                              event.type === 'exam' ? 'destructive' :
                              event.type === 'conference' ? 'outline' : 'secondary'
                            }>
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCalendarManagement;
