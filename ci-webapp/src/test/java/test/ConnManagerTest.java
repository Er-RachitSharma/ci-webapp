package test;

import static org.junit.Assert.assertNotNull;

import java.sql.Connection;

import org.junit.Test;

import dao.util.ConnManager;

public class ConnManagerTest {
	
	@Test
	public void testConn() {
		Connection conn = ConnManager.connect();
		assertNotNull(conn);
	}
}
