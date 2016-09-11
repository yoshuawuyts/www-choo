# choo
A sturdy framework for creating frontend applications

## For hackers
Iteration speed matters, we get that. There is no 12-step program to get
started. Install, run, iterate. Done. Choo was designed to build things, fast.
Virtually any part can be configured through plugins. And if that's not enough,
choo's modular design allows it to be disassembled and rebuilt to match your
taste. Build things fast, experience unparalled performance, and most of all:
be free.

- 5kb in size makes for a tiny payload
- no boilerplate, tiniest app is 100 chars
- robust tooling has your back on every step
- fast enough in every benchmark, fastest in some

## For beginners
We think there's elegance in simplicity. Choo uses HTML as its template
language, so if you know a bit of HTML, CSS and JavaScript you can start right
away. And as you progress we've got guides and examples available that guide
you every step of the way. We care first and foremost about being fun; screw
being complicated and boring.

- it's just HTML™
- guides covering every topic
- good architecture you can trust and rely upon
- great community that supports each other

## For managers
Hah, don't worry - we won't make you write any code. What we will do, however,
is make your engineers happy. And happy engineers make great products that
attract great hires. Choo has evolved from years of experience working in the
frontlines, and is relied upon by industry leaders across the globe.

## For architects
We respect scale. Large teams, large codebases, many users - at scale there's
more to worry about. Choo's functional design enables components to be tested
in isolation, setting a standard in robustness. Concerns are cleanly
separated and application logic is decoupled by using a central message bus.
This leads to a smooth workflow for development and debugging applications
running live.

- view elements can be built, and reused in any other framework
- functional components allow for great testing
- semver and changelogs create a clean upgrade path
- mimized peer dependencies prevent lock in
- namespaces isolate leakage of concerns
- great for refactoring

----
- each service owns its own localized state
- each service gets the data from kafka it's interested in
- there's a giant datastore from which local state can be replicated in case
  a local node goes down
- each piece can hook into the message bus
