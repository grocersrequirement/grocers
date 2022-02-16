select * from user where eamil="abc";
select * from user;
delete from user where aid=4;
drop table users;
insert into users(id,username , password,enabled,role) values(1,"sanket","jain",true,"ADMIN");
insert into users(id,username , password,enabled,role) values(2,"sanket","jain",true,"USER");
select username,password from users where username = "sanket";