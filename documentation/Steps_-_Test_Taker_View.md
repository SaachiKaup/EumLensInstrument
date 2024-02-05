
Data must be written such that each reordering operation changes the “file” (can be anything, database, python object etc).

This file can be retrieved as it is in the next session to allow for a user to give a part of the test, and then come back at a later time. (Separate Pickle Files)

Must also take into account concurrency: multiple users using the system at once. Though it will not be more than 100 (maximum) at a time.

testId serves as an internal Primary key, to query the same object for updating separate form inputs, a process that can be simplified further.