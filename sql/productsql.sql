create table products (id int primary key auto_increment, productname varchar(15),description varchar(15),quantity int,price int(15));
alter table orders modify column order_date to orderdate;
select * from products;
desc products;
drop table products;
use grocers;
drop table product;