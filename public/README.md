**Project Title**
    Meet App

**Objective**
    To build a serverless, progressive web application (PWA) with React using a
    test-driven development (TDD) technique. The application uses the Google
    Calendar API to fetch upcoming events.

**Context**
    This project combines serverless architecture and PWAs, offering benefits like easy scalability and offline support. It adopts a TDD approach for high-quality code development and incorporates data visualization for enhanced user experience. The app will benefit users seeking informstion on upcoming events in specific cities, with its backend hosted on a serverless function and the app itself being responsive and installable. It targets various users, including friends, professional networks, and potential employers, ensuring immediate code accessibility on GitHub.

**Project Overview & Requirements**
    The following sections provides information about the requirements for the app.

**The 5 Ws**
    Who - Users of the Meet app, including individuals, friends, professional contacts, and potential employers.
    What - A progressive web app featuring offline capabilities and a serverless backend developed using TDD methodology.
    When - Users can access the app anytime to view upcoming events for a specific city, while recruiters can immediately review the code on GitHub.
    Where - The serverless backend is hosted on a cloud provider (e.g., AWS), and the app is accessible online and offline, adapting to various devices.
    Why - Embracing serverless infrastructure and PWAs enhances user experience and performance, while TDD ensures code quality and thorough testing. These skills, along with data visualization, set developers apart in the industry.

**Key Features**
    -Filter Events by City.
    -Show/Hide Event Details.
    -Specify Number of Events.
    -Use the App When Offline.
    -Add an App Shortcut to the Home Screen.
    -Display Charts Visualizing Event Details.

**User Stories**
_Feature 1: Filter Events By City_
    As a user,
    I should be able to filter events by city.
    So that I can see a list of events taking place in that city.

_Feature 2: Show/Hide Event Details_
    As a user,
    I should be able to toggle event details on and off.
    So that I can choose whether to view additional information about the events listed.

_Feature 3: Specify Number of Events_
    As a user,
    I should be able to specify the number of events displayed per page.
    So that I can control the amount of event information visible at once.

_Feature 4: Use the App When Offline_
    As a user,
    I should be able to access previously loaded event data while offline.
    So that I can view event information even when I don't have an internet connection.

_Feature 5: Add an App Shortcut to the Home Screen_
    As a user,
    I should be able to create a shortcut for the app on my device's home screen.
    So that I can quickly access the events app without navigating through other applications or menus.
        NB: this feature is handled by the user’s OS, not by the Meet app. For this reason, we won’t be testing this feature.

_Feature 6: Display Charts Visualizing Event Details_
    As a user,
    I should be able to view chartsand graphics representing event data.
    So that I can easily understand and analyze event information at a glance.

**Test Scenarios**
_Feature 1: Filter Events By City_
    Scenario 1
    When user hasn’t searched for a specific city, show upcoming events from all cities.
        -Given user hasn’t searched for any city;
        -When the user opens the app;
        -Then the user should see a list of upcoming events.
    Scenario 2
    User should see a list of suggestions when they search for a city.
        -Given the main page is open;
        -When user starts typing in the city textbox;
        -Then the user should receive a list of cities (suggestions) that match what they’ve typed.
    Scenario 3
    User can select a city from the suggested list.
        -Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
        -When the user selects a city (e.g., “Berlin, Germany”) from the list;
        -Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

_Feature 2: Show/Hide Event Details_
    Scenario 1
    User toggles event details visibility.
        -Given the user is viewing the list of events with details displayed,
        -When the user clicks on the "Hide Details" button,
        -Then the event details should be hidden from view.
    Scenario 2
    User chooses to view event details.
        -Given the user is viewing the list of events with details hidden,
        -When the user clicks on a specific event to view its details,
        -Then the event details should be displayed to the user.
    Scenario 3
    User toggles event details multiple times.
        -Given the user has toggled event details visibility,
        -When the user clicks on the "Show Details" button and then clicks again on the "Hide Details" button,
        -Then the event details should be hidden from view again.

_Feature 3: Specify Number of Events_
    Scenario 1
    User selects to display fewer events per page.
        -Given the user is viewing a list of events with the default number of events per page,
        -When the user selects to display only 5 events per page,
        -Then only 5 events should be displayed on the page.
    Scenario 2
    User selects to display more events per page.
        -Given the user is viewing a list of events with the default number of events per page,
        -When the user selects to display 20 events per page,
        -Then 20 events should be displayed on the page.
    Scenario 3
    User changes the number of events per page multiple times.
        -Given the user has changed the number of events displayed per page,
        -When the user switches between displaying 10 and 15 events per page,
        -Then the number of events displayed should adjust accordingly each time.

_Feature 4: Use the App When Offline_
    Scenario 1
    User accesses previously loaded event data offline.
        -Given the user has previously opened the app and loaded event data while online,
        -When the user opens the app while offline,
        -Then the user should still be able to view the previously loaded event data.
    Scenario 2
    User attempts to access new event data while offline.
        -Given the user has opened the app while offline,
        -When the user attempts to refresh or load new event data,
        -Then the app should notify the user that an internet connection is required to fetch new data.
    Scenario 3
    User interacts with event details offline.
        -Given the user has opened the app while offline and is viewing event details,
        -When the user attempts to interact with event details (e.g., clicking on an event),
        -Then the app should provide feedback indicating that online connectivity is needed for further interaction.

_Feature 5: Add an App Shortcut to the Home Screen_
    Scenario 1
    User adds the app shortcut to the home screen.
        -Given the user is on the app's main screen,
        -When the user selects the option to add a shortcut to the home screen,
        -Then the app should prompt the user to confirm the action.
    Scenario 2
    User removes the app shortcut from the home screen.
        -Given the user has added the app shortcut to the home screen,
        -When the user long-presses the shortcut icon to remove it,
        -Then the app shortcut should be deleted from the home screen.
    Scenario 3
    User attempts to add duplicate app shortcut.
        -Given the user has already added the app shortcut to the home screen,
        -When the user attempts to add another shortcut,
        -Then the app should prevent the duplication and notify the user accordingly.

_Feature 6: Display Charts Visualizing Event Details_
    Scenario 1
    User views a chart representing event attendance.
        -Given the user is viewing the details of a specific event,
        -When the user navigates to the event's attendance section,
        -Then a chart representing the event attendance should be displayed.
    Scenario 2
    User interacts with the chart.
        -Given the user is viewing a chart representing event details,
        -When the user clicks on specific data points within the chart,
        -Then additional information related to those data points should be provided.
    Scenario 3
    User switches between different chart types.
        -Given the user is viewing a chart representing event details,
        -When the user selects a different chart type from the options provided,
        -Then the chart should dynamically update to display the selected chart type.

**Getting Started**
    The application is accessibla on the web at the following link:    
        TBP
   
    The application is accessibla at GitHub at the following link:
        https://github.com/GhostWriter2023/meet.git

**Author**
    GhostWriter