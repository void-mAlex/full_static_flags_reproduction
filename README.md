# full-static

Uses ember-scroll-modifiers
this relies on a service 
https://github.com/elwayman02/ember-scroll-modifiers/blob/master/addon/services/observer-manager.js

which is NOT re-exported but only used in the modifier inside the addon itself

https://github.com/elwayman02/ember-scroll-modifiers/blob/master/addon/modifiers/did-intersect.js#L14



* `git clone <repository-url>` this repository
* `cd static_embroider_v3`
* `pnpm install`
* `pnpm ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


will see a js exception in the console and brokewn text on screen

in `ember-cli-build.js` comment out 
`staticAddonTrees` and `staticAddonTestSupportTrees` and restart ember server and it will show it works

core of the issue seems to be the mechanism by which DI system works

scroll modifiers exports a `did-intersect` modifier which when used in the host app gets an owner of the host app
when service injection looks up the requested service from inside the modifier it checks only on the owner where
due to staticAddonTrees we no longer register services from addons (re-exported or otherwise)


