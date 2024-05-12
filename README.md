**Project Title**<br>
    Meet App

**Objective**<br>
    To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

**Context**<br>
    This project combines serverless architecture and PWAs, offering benefits like easy scalability and offline support. It adopts a TDD approach for high-quality code development and incorporates data visualization for enhanced user experience. The app will benefit users seeking informstion on upcoming events in specific cities, with its backend hosted on a serverless function and the app itself being responsive and installable. It targets various users, including friends, professional networks, and potential employers, ensuring immediate code accessibility on GitHub.

**Project Overview & Requirements**<br>
    The following sections provides information about the requirements for the app.

**The 5 Ws**<br>
    Who - Users of the Meet app, including individuals, friends, professional contacts, and potential employers.<br>
    What - A progressive web app featuring offline capabilities and a serverless backend developed using TDD methodology.<br>
    When - Users can access the app anytime to view upcoming events for a specific city, while recruiters can immediately review the code on GitHub.<br>
    Where - The serverless backend is hosted on a cloud provider (e.g., AWS), and the app is accessible online and offline, adapting to various devices.<br>
    Why - Embracing serverless infrastructure and PWAs enhances user experience and performance, while TDD ensures code quality and thorough testing. These skills, along with data visualization, set developers apart in the industry.<br>

**Key Features**<br>
    ●Filter Events by City.<br>
    ●Show/Hide Event Details.<br>
    ●Specify Number of Events.<br>
    ●Use the App When Offline.<br>
    ●Add an App Shortcut to the Home Screen.<br>
    ●Display Charts Visualizing Event Details.<br>

**User Stories**<br>
_Feature 1: Filter Events By City_<br>
    As a user,<br>
    I should be able to filter events by city.<br>
    So that I can see a list of events taking place in that city.<br>

_Feature 2: Show/Hide Event Details_<br>
    As a user,<br>
    I should be able to toggle event details on and off.<br>
    So that I can choose whether to view additional information about the events listed.<br>

_Feature 3: Specify Number of Events_<br>
    As a user,<br>
    I should be able to specify the number of events displayed per page.<br>
    So that I can control the amount of event information visible at once.<br>

_Feature 4: Use the App When Offline_<br>
    As a user,<br>
    I should be able to access previously loaded event data while offline.<br>
    So that I can view event information even when I don't have an internet connection.<br>

_Feature 5: Add an App Shortcut to the Home Screen_<br>
    As a user,<br>
    I should be able to create a shortcut for the app on my device's home screen.<br>
    So that I can quickly access the events app without navigating through other applications or menus.<br>
        NB: this feature is handled by the user’s OS, not by the Meet app. For this reason, we won’t be testing this feature.

_Feature 6: Display Charts Visualizing Event Details_<br>
    As a user,<br>
    I should be able to view chartsand graphics representing event data.<br>
    So that I can easily understand and analyze event information at a glance.<br>

**Test Scenarios**<br>
_Feature 1: Filter Events By City_<br>
    Scenario 1<br>
    When user hasn’t searched for a specific city, show upcoming events from all cities.<br>
        -Given user hasn’t searched for any city;<br>
        -When the user opens the app;<br>
        -Then the user should see a list of upcoming events.<br>
    Scenario 2<br>
    User should see a list of suggestions when they search for a city.<br>
        -Given the main page is open;<br>
        -When user starts typing in the city textbox;<br>
        -Then the user should receive a list of cities (suggestions) that match what they’ve typed.<br>
    Scenario 3<br>
    User can select a city from the suggested list.<br>
        -Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;<br>
        -When the user selects a city (e.g., “Berlin, Germany”) from the list;<br>
        -Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.<br>

_Feature 2: Show/Hide Event Details_<br>
    Scenario 1<br>
    User toggles event details visibility.<br>
        -Given the user is viewing the list of events with details displayed,<br>
        -When the user clicks on the "Hide Details" button,<br>
        -Then the event details should be hidden from view.<br>
    Scenario 2<br>
    User chooses to view event details.<br>
        -Given the user is viewing the list of events with details hidden,<br>
        -When the user clicks on a specific event to view its details,<br>
        -Then the event details should be displayed to the user.<br>
    Scenario 3<br>
    User toggles event details multiple times.<br>
        -Given the user has toggled event details visibility,<br>
        -When the user clicks on the "Show Details" button and then clicks again on the "Hide Details" button,<br>
        -Then the event details should be hidden from view again.<br>

_Feature 3: Specify Number of Events_<br>
    Scenario 1<br>
    User selects to display fewer events per page.<br>
        -Given the user is viewing a list of events with the default number of events per page,<br>
        -When the user selects to display only 5 events per page,<br>
        -Then only 5 events should be displayed on the page.<br>
    Scenario 2<br>
    User selects to display more events per page.<br>
        -Given the user is viewing a list of events with the default number of events per page,<br>
        -When the user selects to display 20 events per page,<br>
        -Then 20 events should be displayed on the page.<br>
    Scenario 3<br>
    User changes the number of events per page multiple times.<br>
        -Given the user has changed the number of events displayed per page,<br>
        -When the user switches between displaying 10 and 15 events per page,<br>
        -Then the number of events displayed should adjust accordingly each time.<br>

_Feature 4: Use the App When Offline_<br>
    Scenario 1<br>
    User accesses previously loaded event data offline.<br>
        -Given the user has previously opened the app and loaded event data while online,<br>
        -When the user opens the app while offline,<br>
        -Then the user should still be able to view the previously loaded event data.<br>
    Scenario 2<br>
    User attempts to access new event data while offline.<br>
        -Given the user has opened the app while offline,<br>
        -When the user attempts to refresh or load new event data,<br>
        -Then the app should notify the user that an internet <br>connection is required to fetch new data.<br>
    Scenario 3<br>
    User interacts with event details offline.<br>
        -Given the user has opened the app while offline and is viewing event details,<br>
        -When the user attempts to interact with event details (e.g., clicking on an event),<br>
        -Then the app should provide feedback indicating that online connectivity is needed for further interaction.<br>

_Feature 5: Add an App Shortcut to the Home Screen_<br>
    Scenario 1<br>
    User adds the app shortcut to the home screen.<br>
        -Given the user is on the app's main screen,<br>
        -When the user selects the option to add a shortcut to the home screen,<br>
        -Then the app should prompt the user to confirm the action.<br>
    Scenario 2<br>
    User removes the app shortcut from the home screen.<br>
        -Given the user has added the app shortcut to the home screen,<br>
        -When the user long-presses the shortcut icon to remove it,<br>
        -Then the app shortcut should be deleted from the home screen.<br>
    Scenario 3<br>
    User attempts to add duplicate app shortcut.<br>
        -Given the user has already added the app shortcut to the home screen,<br>
        -When the user attempts to add another shortcut,<br>
        -Then the app should prevent the duplication and notify the user accordingly.<br>

_Feature 6: Display Charts Visualizing Event Details_<br>
    Scenario 1<br>
    User views a chart representing event attendance.<br>
        -Given the user is viewing the details of a specific event,<br>
        -When the user navigates to the event's attendance section,<br>
        -Then a chart representing the event attendance should be displayed.<br>
    Scenario 2<br>
    User interacts with the chart.<br>
        -Given the user is viewing a chart representing event details,<br>
        -When the user clicks on specific data points within the chart,<br>
        -Then additional information related to those data points should be provided.<br>
    Scenario 3<br>
    User switches between different chart types.<br>
        -Given the user is viewing a chart representing event details,<br>
        -When the user selects a different chart type from the options provided,<br>
        -Then the chart should dynamically update to display the selected chart type.<br>

**Getting Started**<br>
    The application is accessibla on the web at the following link:<br>
        TBP
   
    The application is accessibla at GitHub at the following link:<br>
        https://github.com/GhostWriter2023/meet.git

**Author**<br>
    GhostWriter
