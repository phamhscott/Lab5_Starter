# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Scott Pham

1. I would not use a unit test here to test the "message" feature. Since unit tests focus on individual parts of code in encapsulated units, a feature like this that allows a user to write and send a message to another user involves multiple parts (UI, network communication, etc). This perhaps showcases the con of unit testing listed which is that unit tests cannot test how individual components interact with each other on an application/feature level and the "message" feature describes exactly that.

2. I would use a unit test to test this "max message length" feature. A unit test is great here because it tests a specific/isolated part of the code, i.e. validates if a m,essage length (string) is under or over 80 characters. IT can do this without needing the rest of the message application running and thus a unit tests can be executed quickly and that the logic functions correctly in isolation.
